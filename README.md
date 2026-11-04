# Khaemenes Academy — Yearbook Studio

**Canonical public application:** [index.html](./index.html)  
**Public Yearbook URL:** https://vervenveda.com/Academy-Yearbook.github.io/

The founder's uploaded `khaemenes_academy_yearbook (1).html` is the feature baseline of the current application. The canonical `index.html` retains the original single-file, sovereign, offline-capable 50-photograph Yearbook Studio while adding compatibility-preserving reliability and accessibility improvements.

## Features

- Up to 50 photographs, added through local image selection and displayed in a keyboard-accessible gallery.
- Captions, six frame designs, custom frame colors, zoom, and horizontal/vertical crop positioning.
- Local browser IndexedDB image storage; uploads are resized locally before saving.
- Gallery previews and individual image exports reflect saved crop, caption, and frame settings.
- Print yearbook, export project as JSON, and import a prior project.
- Import validates the full incoming project before replacing records in one IndexedDB transaction. A failed transaction rolls back.
- Readable responsive layout and user-visible error/status messages.

## Data and student privacy

The current implementation stores photographs in the browser's **KhaemenesYearbook** IndexedDB database with the existing `photos` store (schema version 1). The original storage keys are intentionally preserved to avoid orphaning prior work. Records are **not yet separated by authenticated Academy learner** and are not synchronized across devices or to parent accounts. Do not present this as a multi-user cloud photo service.

**Export a project backup regularly**, particularly before changing devices or clearing browser data. Imported projects replace the current browser's Yearbook after explicit confirmation. Only upload photographs you have permission to use.

## Files and authority

- `index.html`: sole public Yearbook entry point, used by the Grade 9 Student Profile Yearbook popup.
- `yearbook-agi-minicloud.html`: separate experimental file-management / secure-vault application. It is **not** the Yearbook application, and its storage/administrative controls must not be merged into the public Yearbook.

Keep the existing Yearbook photo database and v1 project export format compatible when making updates. Audit carefully before removing or renaming the auxiliary HTML file.

## Verification limits

Repository source checks confirm the code paths and JavaScript syntax; the deployed website, actual upload/resize behavior, IndexedDB persistence after refresh, import/export round trips, iframe embedding, and printing require browser tests. No claim of full end-to-end verification is made until those tests are performed.
