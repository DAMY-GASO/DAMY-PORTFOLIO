'use strict';

// -----------------------------------------------------------------
// Client Reviews — auto-loaded from a published Google Sheet (CSV)
// Fed by a Google Form: Name | Company/Role | Review | Photo (file upload)
//
// SETUP:
// 1. Create the Google Form + linked Sheet (see instructions provided).
// 2. In the Sheet: File > Share > Publish to web > select the response
//    sheet tab > format: CSV > Publish > copy the link below.
// 3. Make sure the "(File responses)" Drive folder is shared as
//    "Anyone with the link - Viewer" so photos can display.
// -----------------------------------------------------------------

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-LYAVOaDktl5-FVqiGf_uYFO8jKJJvqwSRBMKmlE78zZSpu-sgKbSKCsHVVKs8VdqoLCe4QWSHDbI/pub?output=csv";

function extractDriveFileId(url) {
  if (!url) return null;
  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : null;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function renderReviewItem(row) {
  // Google Forms default column names — adjust here if you rename the form questions
  const name = row['Name'] || row['Jina'] || '';
  const role = row['Company / Role'] || row['Cheo'] || '';
  const text = row['Review'] || row['Maoni'] || '';
  const photoRaw = row['Photo'] || row['Picha'] || '';

  if (!name || !text) return null;

  const fileId = extractDriveFileId(photoRaw);
  const avatarHTML = fileId
    ? `<img class="testimonial-avatar-img" src="https://drive.google.com/thumbnail?id=${fileId}&sz=w200" alt="${escapeHTML(name)}">`
    : `<div class="testimonial-avatar"><ion-icon name="person-circle-outline"></ion-icon></div>`;

  const li = document.createElement('li');
  li.className = 'testimonial-item';
  li.innerHTML = `
    <p class="testimonial-text">"${escapeHTML(text)}"</p>
    <div class="testimonial-author">
      ${avatarHTML}
      <div>
        <p class="testimonial-name">${escapeHTML(name)}</p>
        <p class="testimonial-role">${escapeHTML(role)}</p>
      </div>
    </div>
  `;
  return li;
}

async function loadGoogleReviews() {
  const list = document.getElementById('dynamic-testimonials-list');
  if (!list) return;
  if (!SHEET_CSV_URL || SHEET_CSV_URL.includes('PASTE_YOUR')) return; // not configured yet

  try {
    const response = await fetch(SHEET_CSV_URL);
    const csvText = await response.text();

    const parsed = Papa.parse(csvText.trim(), { header: true, skipEmptyLines: true });

    list.innerHTML = '';
    parsed.data.reverse().forEach(row => {
      const item = renderReviewItem(row);
      if (item) list.appendChild(item);
    });
  } catch (err) {
    console.error('Failed to load client reviews:', err);
  }
}

loadGoogleReviews();
