---
module_name: "Training & Inference Data Governance"
order: 6
why_credible: "Using personal data for model training requires a lawful basis under Art. 5–6, and purpose limitation under Art. 5(1)(b) restricts repurposing operational data for training without a compatible purpose assessment or additional consent."
additions:
  - "Lawful basis assessment for using personal data in model training and fine-tuning"
  - "Data subject notification about training data use through updated privacy notices (Art. 13–14)"
  - "Opt-out mechanisms enabling data subjects to exclude their data from training datasets"
---

Model training on personal data is one of the most scrutinized areas of GDPR compliance in the AI space. Using personal data to train or fine-tune models requires a valid lawful basis — typically legitimate interest under Art. 6(1)(f), which demands a documented LIA demonstrating that the training purpose does not override data subjects' rights and freedoms. Consent under Art. 6(1)(a) is an alternative but carries the burden of meeting all Art. 7 conditions, including the ability to withdraw consent, which may be technically impractical once data has been incorporated into model weights.

Purpose limitation creates an additional constraint. Personal data collected for an operational purpose (such as providing a service) cannot automatically be repurposed for model training. Organizations must assess whether training constitutes a compatible purpose under Art. 6(4), considering the relationship between the original and new purposes, the context of collection, the nature of the data, possible consequences for data subjects, and the existence of appropriate safeguards. Where training is not a compatible purpose, a new lawful basis is required. Data subjects must be informed about training data use through privacy notices compliant with Art. 13 or 14, and organizations should implement mechanisms for data subjects to object to or opt out of training data inclusion.
