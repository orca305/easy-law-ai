## ADR-006: Model legal provisions as hierarchical string identifiers

Legal numbering is not assumed to be numeric.

Legal structures may use Arabic numerals, Roman numerals,
Korean characters, alphabetic identifiers, branch numbers,
or special characters.

Examples include:

- 제10조의2
- ①
- 가.
- IV
- A-1

Therefore:

- original display identifiers are stored as strings
- normalized identifiers are optional
- numeric values are used only for ordering

This prevents the database schema from being coupled to one
specific legal numbering convention.

## ADR-007: Use a unified provision hierarchy

Do not create separate tables for articles, paragraphs, items,
and subitems.

Use `law_provisions` as a self-referencing hierarchy.

This allows the system to support new or unusual legal structures
without schema changes.

The `provi` prefix is used for provision-level columns.
