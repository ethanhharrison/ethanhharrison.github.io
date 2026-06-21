# ehharrison.github.io

Personal academic website for Ethan (E) H. Harrison.

Built from [Jon Barron's website template](https://jonbarron.info/) and hosted on GitHub Pages.

## Local preview

Open `index.html` in a browser, or serve the directory locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Site structure

- `index.html` — homepage
- `stylesheet.css` — styling
- `data/` — downloadable documents (CV, project papers)
- `images/` — web assets used on the homepage (photos, posters, demo videos)
- `images/favicon/` — site favicon
- `media/originals/` — original source media (GIF, MOV, MP4, PNG) used to generate `images/` assets

## Media layout

| Path | Contents |
| --- | --- |
| `images/profile_photo.jpg` | Profile photo |
| `images/arli.{jpg,mp4}` | Learning to Act While Waiting demo |
| `images/real_steel.{jpg,mp4}` | REAL Real Steel demo |
| `images/drone_racing.{jpg,mp4}` | Learning to Race demo |
| `images/sah_ai.png` | Sah-AI system diagram |
| `data/E_Harrison_CV.pdf` | Resume |
| `data/sah-ai.pdf` | Sah-AI project paper |
| `media/originals/` | Unprocessed source files |

## Deployment

Push to the `master` branch of this repository. GitHub Pages serves the site from the repo root.

Update `CNAME` if you use a custom domain.
