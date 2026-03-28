

## Brand Assets Package for Quhan.im

A complete brand asset kit, generated programmatically using the existing visual identity (Cormorant Garamond, Space Grotesk, Parchment/Ink/Terracotta palette), saved to `brand/brand-assets/`.

### Design Philosophy File
Create `brand/brand-assets/DESIGN-PHILOSOPHY.md` â a short manifesto capturing the visual language ("Editorial Warmth") to guide all asset creation.

### Assets to Generate

**Logo Variants** (PNG)
| File | Description | Size |
|------|-------------|------|
| `logo-primary-light.png` | Dark wordmark on transparent | 2000Ã600 |
| `logo-primary-dark.png` | Light wordmark on transparent | 2000Ã600 |
| `logo-icon-light.png` | "Q" lettermark on transparent | 800Ã800 |
| `logo-icon-dark.png` | "Q" lettermark, light version | 800Ã800 |
| `logo-on-parchment.png` | Wordmark on brand background | 2000Ã600 |
| `logo-on-ink.png` | Wordmark on dark background | 2000Ã600 |

**Favicon**
| File | Size |
|------|------|
| `favicon-16.png` | 16Ã16 |
| `favicon-32.png` | 32Ã32 |
| `favicon-180.png` | 180Ã180 (Apple touch) |
| `favicon-512.png` | 512Ã512 (PWA) |

**Social Media Banners & Profile Images**
| File | Platform | Size |
|------|----------|------|
| `twitter-header.png` | X/Twitter banner | 1500Ã500 |
| `twitter-profile.png` | X/Twitter avatar | 400Ã400 |
| `linkedin-banner.png` | LinkedIn cover | 1584Ã396 |
| `linkedin-profile.png` | LinkedIn avatar | 400Ã400 |
| `instagram-profile.png` | Instagram avatar | 320Ã320 |
| `instagram-post.png` | IG post template | 1080Ã1080 |
| `instagram-story.png` | IG story template | 1080Ã1920 |
| `facebook-cover.png` | Facebook cover | 820Ã312 |
| `youtube-banner.png` | YouTube channel art | 2560Ã1440 |
| `youtube-thumbnail.png` | YT thumbnail template | 1280Ã720 |

**Web & Email**
| File | Usage | Size |
|------|-------|------|
| `og-image.png` | Open Graph / link preview | 1200Ã630 |
| `email-signature.png` | Email footer banner | 600Ã150 |
| `newsletter-header.png` | Newsletter top banner | 600Ã200 |

### Technical Approach
1. Write design philosophy `.md` file
2. Use Python (Pillow) with Google Fonts downloaded locally to programmatically render all assets â precise typography, brand colors, clean geometry
3. Each asset follows the editorial minimalism: Cormorant Garamond wordmark, terracotta `.im` accent, generous whitespace
4. QA all outputs visually, fix any issues
5. Update `index.html` to reference new favicon

### Output
~25 production-ready PNG files in `brand/brand-assets/`, plus the design philosophy document.

