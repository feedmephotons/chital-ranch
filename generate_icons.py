import requests
import os
from datetime import datetime
import time

class GPTImageGenerator:
    def __init__(self, api_key=None):
        self.api_key = api_key or os.environ.get('OPENAI_API_KEY')
        if not self.api_key:
            raise ValueError("OpenAI API key is required. Set OPENAI_API_KEY environment variable or pass api_key parameter.")
        self.endpoint = "https://api.openai.com/v1/images/generations"
        self.output_dir = "public/images/icons"

        if not os.path.exists(self.output_dir):
            os.makedirs(self.output_dir)

    def generate(self, prompt, size="1024x1024", quality="high", n=1, filename_prefix="icon"):
        try:
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }

            payload = {
                "model": "gpt-image-1",
                "prompt": prompt,
                "n": n,
                "size": size,
                "quality": quality
            }

            print(f"🎨 Generating: {filename_prefix}...")
            response = requests.post(
                self.endpoint,
                headers=headers,
                json=payload,
                timeout=60
            )

            if response.status_code == 200:
                result = response.json()

                if "data" in result and len(result["data"]) > 0:
                    images = []

                    for i, item in enumerate(result["data"]):
                        image_url = item["url"]

                        # Download and save image
                        img_response = requests.get(image_url, timeout=30)
                        if img_response.status_code == 200:
                            filename = f"{filename_prefix}.png"
                            filepath = os.path.join(self.output_dir, filename)

                            with open(filepath, "wb") as f:
                                f.write(img_response.content)

                            print(f"  ✓ Saved: {filepath}")
                            images.append(filepath)
                        else:
                            print(f"  ✗ Failed to download image")

                    return images
                else:
                    print("❌ No image data in response")
                    return []
            else:
                print(f"❌ API Error {response.status_code}: {response.text[:200]}")
                return []

        except Exception as e:
            print(f"❌ Exception: {str(e)}")
            return []

# Initialize generator
generator = GPTImageGenerator()

# Generate icons for Chital Ranch
print("\n🦌 Generating Chital Ranch Icons\n")

# 1. Main Logo - Deer silhouette
generator.generate(
    "Elegant fallow deer silhouette logo. Side profile of a majestic deer with antlers. "
    "Minimalist line art style. Deep navy blue color (#1a2332). Clean professional design. "
    "Transparent background. Vector-style with clean edges.",
    filename_prefix="logo-deer"
)
time.sleep(2)

# 2. Genetics/DNA Icon
generator.generate(
    "DNA double helix icon with deer antler integration. Scientific and elegant. "
    "Gold color (#d4af37). Minimalist professional style. "
    "Transparent background. Clean geometric design.",
    filename_prefix="icon-genetics"
)
time.sleep(2)

# 3. Ranch/Property Icon
generator.generate(
    "Texas ranch property icon. Fence with gate and open land. Simple line art. "
    "Charcoal gray color (#2d3748). Professional minimal design. "
    "Transparent background. Clean and professional.",
    filename_prefix="icon-ranch"
)
time.sleep(2)

# 4. Location/Map Icon
generator.generate(
    "Location pin icon with Texas shape. Clean modern design. "
    "Gold color (#d4af37). Minimalist style. "
    "Transparent background. Professional quality.",
    filename_prefix="icon-location"
)
time.sleep(2)

# 5. Phone Icon
generator.generate(
    "Modern phone/contact icon. Simple line art telephone symbol. "
    "Navy blue color (#1a2332). Minimalist professional design. "
    "Transparent background. Clean edges.",
    filename_prefix="icon-phone"
)
time.sleep(2)

# 6. Email Icon
generator.generate(
    "Email envelope icon. Clean minimal design. "
    "Gold color (#d4af37). Professional line art style. "
    "Transparent background. Modern and simple.",
    filename_prefix="icon-email"
)

print("\n✅ All icons generated successfully!")
print(f"📁 Saved to: public/images/icons/\n")
