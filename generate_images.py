import requests
import json
import base64
import os
import time

class GeminiImageGenerator:
    def __init__(self, api_key=None):
        self.api_key = api_key or os.environ.get('GOOGLE_AI_API_KEY')
        if not self.api_key:
            raise ValueError("Google AI API key is required. Set GOOGLE_AI_API_KEY environment variable or pass api_key parameter.")
        self.base_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent"

    def generate(self, prompt, aspect_ratio="16:9", candidate_count=1, output_dir="public/images", filename="image"):
        parts = [{"text": prompt}]

        request_body = {
            "contents": [{"parts": parts}],
            "generation_config": {
                "response_modalities": ["IMAGE"],
                "image_config": {
                    "aspect_ratio": aspect_ratio
                },
                "candidate_count": min(candidate_count, 8),
                "temperature": 0.85,
                "topK": 40,
                "topP": 0.95
            }
        }

        print(f"🎨 Generating: {filename}...")

        response = requests.post(
            f"{self.base_url}?key={self.api_key}",
            headers={"Content-Type": "application/json"},
            data=json.dumps(request_body),
            timeout=60
        )

        if response.status_code != 200:
            print(f"❌ API Error {response.status_code}: {response.text[:200]}")
            return []

        result = response.json()
        images = []

        for i, candidate in enumerate(result.get('candidates', [])):
            for part in candidate['content']['parts']:
                if 'inlineData' in part:
                    image_data = base64.b64decode(part['inlineData']['data'])

                    # Save image
                    if not os.path.exists(output_dir):
                        os.makedirs(output_dir)

                    if candidate_count > 1:
                        filepath = os.path.join(output_dir, f"{filename}_{i+1}.jpg")
                    else:
                        filepath = os.path.join(output_dir, f"{filename}.jpg")

                    with open(filepath, 'wb') as f:
                        f.write(image_data)

                    print(f"  ✓ Saved: {filepath}")
                    images.append(filepath)

        return images

# Initialize generator
generator = GeminiImageGenerator()

print("\n🦌 Generating Chital Ranch Images\n")
print("=" * 60)

# 1. Hero Background - Main landing image
print("\n📸 HERO IMAGE")
generator.generate(
    """Professional photograph of a misty South Texas ranch at golden hour.
    Wide open pasture land with gentle rolling hills in the background.
    Morning mist hovering over the grass. Warm, inviting atmosphere.
    Wooden fence line visible on one side. Oak trees in the distance.
    Cinematic quality, professional ranch photography.
    Natural earth tones: golden grass, deep greens, warm sky.
    High resolution, suitable for hero background.""",
    aspect_ratio="21:9",
    output_dir="public/images/backgrounds",
    filename="hero-ranch"
)
time.sleep(3)

# 2. About section background
print("\n📸 ABOUT BACKGROUND")
generator.generate(
    """Soft-focus Texas ranch landscape with wooden fence posts.
    Natural lighting, peaceful ranch setting.
    Blurred background suitable for text overlay.
    Warm earth tones, professional quality.
    Gentle depth of field.""",
    aspect_ratio="16:9",
    output_dir="public/images/backgrounds",
    filename="about-bg"
)
time.sleep(3)

# 3. Gallery Images - Chocolate Fallow Deer (generate 8 variations)
print("\n📸 GALLERY - CHOCOLATE FALLOW DEER (8 images)")
generator.generate(
    """Generate 8 different professional photographs of chocolate fallow deer:

    1. Majestic chocolate fallow buck with large antlers, side profile, standing in Texas ranch pasture, golden hour lighting

    2. Beautiful chocolate fallow doe with spotted coat, graceful pose, natural ranch setting, soft afternoon light

    3. Group of chocolate fallow deer grazing peacefully in open pasture, various ages, ranch landscape background

    4. Close-up portrait of chocolate fallow buck showing rich dark brown color and white spots, professional wildlife photography

    5. Chocolate fallow breeding pair - buck and doe together, standing in ranch grassland, showing quality genetics

    6. Young chocolate fallow yearling, showing strong frame and good color, ranch environment, clear details

    7. Chocolate fallow buck walking through Texas ranch with oak trees, showing movement and grace, natural setting

    8. Chocolate fallow deer herd at sunrise, misty ranch landscape, peaceful morning scene, professional quality

    All images: Professional ranch photography, natural poses, show the rich chocolate brown coat with white spots characteristic of fallow deer, Texas ranch setting, high quality, well-lit, suitable for breeding operation website.""",
    aspect_ratio="3:2",
    candidate_count=8,
    output_dir="public/images/gallery",
    filename="deer"
)
time.sleep(3)

# 4. For Sale section background
print("\n📸 FOR SALE BACKGROUND")
generator.generate(
    """Professional photograph of quality chocolate fallow deer in ranch pen.
    Clean, well-maintained facility. Professional breeding operation.
    Natural lighting, shows healthy animals.
    Suitable as background image with opacity overlay.
    Earth tones, professional ranch aesthetic.""",
    aspect_ratio="16:9",
    output_dir="public/images/backgrounds",
    filename="forsale-bg"
)
time.sleep(3)

# 5. Visit section background
print("\n📸 VISIT BACKGROUND")
generator.generate(
    """Texas ranch entrance with gate and welcome sign area.
    Clean professional ranch driveway. Oak trees lining the path.
    Inviting, well-maintained property.
    Warm lighting, professional quality.
    Shows accessible, professional breeding operation.""",
    aspect_ratio="16:9",
    output_dir="public/images/backgrounds",
    filename="visit-bg"
)
time.sleep(3)

# 6. Contact section background
print("\n📸 CONTACT BACKGROUND")
generator.generate(
    """Soft-focus Texas ranch landscape at sunset.
    Peaceful, welcoming atmosphere.
    Warm golden tones, professional photography.
    Suitable for contact form background with overlay.
    Inviting and professional.""",
    aspect_ratio="16:9",
    output_dir="public/images/backgrounds",
    filename="contact-bg"
)

print("\n" + "=" * 60)
print("✅ All images generated successfully!")
print(f"📁 Backgrounds saved to: public/images/backgrounds/")
print(f"📁 Gallery saved to: public/images/gallery/")
print("\n")
