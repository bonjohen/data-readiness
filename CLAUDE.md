# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Data Readiness is a multi-topic regulatory compliance readiness platform. It provides self-assessment tools for 12 data regulation frameworks: CCPA/CPRA, GDPR, COPPA, FTC Safeguards Rule, HIPAA Security Rule, PCI DSS v4.0.1, NY SHIELD Act, state privacy law patchwork, SEC cybersecurity disclosure, AI governance (NIST AI RMF), EU DORA, and SOC 2. Each topic gets its own manufactured site; a collector site aggregates all 12. The SOC 2 topic replaces an existing standalone project at `c:\projects\soc2` (GitHub: `@bonjohen/soc2`).

## Current State

The project is pre-implementation. The only artifact so far is the SDLC document pipeline (`sdlc/`) and an initial requirements sketch (`sdlc/docs/initial.md`). No application code, no git repo initialized yet.

## SDLC Document Pipeline

All design and implementation work flows through the prompt-based SDLC pipeline at `sdlc/prompts/`. The pipeline is invoked via the `/sdlc` skill.

**Pipeline stages (in order):**

1. `draft-user` — format conversation into `sdlc/docs/draft.user.md`
2. `draft-pdr` or `gen-pdr` — produce `sdlc/docs/draft.pdr.md` (from conversation or from user requirements)
3. `draft-plan` or `gen-plan` — produce `sdlc/docs/draft.plan.md` (from conversation or from PDR)
4. `finalize` — process all three drafts into `sdlc/docs/final.*.md` with gap analysis and traceability
5. `expand` — generate per-phase execution plans at `sdlc/plan/phase{NN}/plan.md`
6. `implement` — execute phases, update task status, write code, commit per phase

**Fast path** (skip design conversations): conversation → `draft-user` → `gen-pdr` → `gen-plan` → `finalize` → `expand` → `implement`

**Key file locations:**

- Prompts: `sdlc/prompts/*.md`
- Draft docs: `sdlc/docs/draft.*.md`
- Final docs: `sdlc/docs/final.*.md`
- Phase plans: `sdlc/plan/phase{NN}/plan.md`
- Skill dispatcher: `sdlc/prompts/SKILL.md`
- Pipeline reference: `sdlc/prompts/prompt-instructions.md`

## Reference Project

The existing SOC 2 project (`c:\projects\soc2`, `@bonjohen/soc2`) is the architectural model for this platform. When making design decisions, consult that codebase for established patterns around site generation, readiness assessment flows, and evidence workflows.
