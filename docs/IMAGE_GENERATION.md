# Image Generation Guide

## API Key Setup

The embedded API keys in the skills have been flagged. To generate custom images:

### Get Your Own API Keys

**For Gemini Images** (backgrounds, gallery):
1. Visit https://aistudio.google.com/app/apikey
2. Create a new API key
3. Set as `GOOGLE_AI_API_KEY` environment variable

**For GPT Images** (icons with transparency):
1. Visit https://platform.openai.com/api-keys
2. Create a new API key
3. Set as `OPENAI_API_KEY` environment variable

### Generate Images

Once you have API keys, set them as environment variables:

```bash
# Set environment variables
export OPENAI_API_KEY=your_openai_key_here
export GOOGLE_AI_API_KEY=your_google_ai_key_here

# Generate icons (transparent backgrounds)
python3 generate_icons.py

# Generate backgrounds and gallery images
python3 generate_images.py
```

Or pass them directly in the scripts by editing the generator initialization.

## Placeholder Images

For now, the website uses placeholder images. You can:

1. **Use stock photos** from:
   - Unsplash.com
   - Pexels.com
   - Pixabay.com

2. **Use your own photos** of Chital Ranch and the deer

3. **Generate with AI** once you have API keys

## Image Specifications

### Icons (PNG, transparent)
- **Logo**: 256x256px
- **Feature icons**: 256x256px
- **Contact icons**: 256x256px

### Backgrounds (JPG)
- **Hero**: 1536x672px (21:9)
- **Section backgrounds**: 1344x768px (16:9)

### Gallery (JPG)
- **Deer photos**: 1536x1024px (3:2)
- 8 images showcasing chocolate fallow deer

## Where to Place Images

```
public/images/
├── icons/
│   ├── logo-deer.png
│   ├── icon-genetics.png
│   ├── icon-ranch.png
│   ├── icon-location.png
│   ├── icon-phone.png
│   └── icon-email.png
├── backgrounds/
│   ├── hero-ranch.jpg
│   ├── about-bg.jpg
│   ├── forsale-bg.jpg
│   ├── visit-bg.jpg
│   └── contact-bg.jpg
└── gallery/
    ├── deer_1.jpg
    ├── deer_2.jpg
    ├── deer_3.jpg
    ├── deer_4.jpg
    ├── deer_5.jpg
    ├── deer_6.jpg
    ├── deer_7.jpg
    └── deer_8.jpg
```

## Temporary Solution

The website is built with placeholders and will work without custom images. You can add them later.
