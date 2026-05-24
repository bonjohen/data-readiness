/**
 * Defines regulatory relationships between topics.
 * Each entry maps a topic ID to its related regulations,
 * with a short explanation of why they're connected.
 */

export interface TopicRelationship {
  topicId: string;
  label: string;
  reason: string;
}

const relationships: Record<string, TopicRelationship[]> = {
  cppa: [
    { topicId: 'gdpr', label: 'GDPR', reason: 'Both regulate personal data processing; many GDPR controls satisfy CCPA requirements' },
    { topicId: 'state-privacy', label: 'State Privacy Laws', reason: 'CCPA set the template that Virginia, Colorado, and other states followed' },
    { topicId: 'ftc-safeguards', label: 'FTC Safeguards', reason: 'FTC enforcement backstops California privacy violations for financial companies' },
  ],
  gdpr: [
    { topicId: 'cppa', label: 'CCPA/CPRA', reason: 'Overlapping personal data definitions and individual rights frameworks' },
    { topicId: 'state-privacy', label: 'State Privacy Laws', reason: 'U.S. state laws borrow heavily from GDPR concepts like data minimization and purpose limitation' },
    { topicId: 'eu-dora', label: 'EU DORA', reason: 'Both EU regulations; DORA adds operational resilience requirements for financial entities already under GDPR' },
  ],
  coppa: [
    { topicId: 'cppa', label: 'CCPA/CPRA', reason: 'CPRA strengthens protections for minors that complement COPPA requirements' },
    { topicId: 'ftc-safeguards', label: 'FTC Safeguards', reason: 'Both enforced by the FTC; security safeguards overlap with COPPA data protection' },
    { topicId: 'state-privacy', label: 'State Privacy Laws', reason: 'Several state laws add age-specific provisions that extend COPPA-style protections' },
  ],
  'ftc-safeguards': [
    { topicId: 'soc2', label: 'SOC 2', reason: 'SOC 2 controls directly map to many Safeguards Rule requirements' },
    { topicId: 'pci-dss', label: 'PCI DSS', reason: 'Financial institutions often face both; PCI controls satisfy many safeguards obligations' },
    { topicId: 'hipaa', label: 'HIPAA', reason: 'Similar administrative, physical, and technical safeguard structure' },
  ],
  hipaa: [
    { topicId: 'soc2', label: 'SOC 2', reason: 'SOC 2 + HITRUST mapping is the standard path for health-tech vendor assurance' },
    { topicId: 'ftc-safeguards', label: 'FTC Safeguards', reason: 'Parallel safeguard categories: administrative, physical, technical' },
    { topicId: 'pci-dss', label: 'PCI DSS', reason: 'Healthcare payment processing requires both HIPAA and PCI compliance' },
  ],
  'pci-dss': [
    { topicId: 'soc2', label: 'SOC 2', reason: 'Many PCI controls map to SOC 2 Trust Services Criteria; audits often run in parallel' },
    { topicId: 'ftc-safeguards', label: 'FTC Safeguards', reason: 'Financial institutions processing cards face overlapping security obligations' },
    { topicId: 'hipaa', label: 'HIPAA', reason: 'Healthcare payment systems must satisfy both PCI and HIPAA security requirements' },
  ],
  'ny-shield': [
    { topicId: 'state-privacy', label: 'State Privacy Laws', reason: 'NY SHIELD is part of the broader state-level privacy and security patchwork' },
    { topicId: 'cppa', label: 'CCPA/CPRA', reason: 'Both impose breach notification and reasonable security requirements on businesses' },
    { topicId: 'ftc-safeguards', label: 'FTC Safeguards', reason: 'Reasonable safeguards under SHIELD align with FTC security program requirements' },
  ],
  'state-privacy': [
    { topicId: 'cppa', label: 'CCPA/CPRA', reason: 'California led the wave; other state laws follow similar consent and rights models' },
    { topicId: 'gdpr', label: 'GDPR', reason: 'State laws borrow GDPR concepts: data minimization, purpose limitation, DPIAs' },
    { topicId: 'ny-shield', label: 'NY SHIELD', reason: 'New York\'s security-focused law complements broader state privacy requirements' },
  ],
  'sec-cyber': [
    { topicId: 'soc2', label: 'SOC 2', reason: 'SOC 2 controls provide evidence for SEC disclosure readiness and board governance' },
    { topicId: 'eu-dora', label: 'EU DORA', reason: 'Both require documented cyber-risk governance and incident reporting at the board level' },
    { topicId: 'pci-dss', label: 'PCI DSS', reason: 'Public companies handling payment data must address both SEC disclosure and PCI compliance' },
  ],
  'ai-governance': [
    { topicId: 'gdpr', label: 'GDPR', reason: 'AI systems processing personal data must comply with GDPR; automated decision-making rules apply' },
    { topicId: 'eu-dora', label: 'EU DORA', reason: 'AI used in financial services faces both NIST AI RMF and DORA resilience requirements' },
    { topicId: 'sec-cyber', label: 'SEC Cyber', reason: 'AI risk is a growing component of cyber-risk disclosure for public companies' },
  ],
  'eu-dora': [
    { topicId: 'gdpr', label: 'GDPR', reason: 'EU financial entities must satisfy both DORA operational resilience and GDPR data protection' },
    { topicId: 'sec-cyber', label: 'SEC Cyber', reason: 'Parallel requirements for cyber incident reporting and board-level risk governance' },
    { topicId: 'pci-dss', label: 'PCI DSS', reason: 'Payment infrastructure in the EU must meet both DORA and PCI security standards' },
  ],
  soc2: [
    { topicId: 'hipaa', label: 'HIPAA', reason: 'SOC 2 + HITRUST is the standard compliance path for health-tech vendors' },
    { topicId: 'pci-dss', label: 'PCI DSS', reason: 'Overlapping control domains; companies often pursue SOC 2 and PCI together' },
    { topicId: 'ftc-safeguards', label: 'FTC Safeguards', reason: 'SOC 2 controls directly evidence many FTC Safeguards Rule requirements' },
  ],
};

export function getRelationships(topicId: string): TopicRelationship[] {
  return relationships[topicId] ?? [];
}
