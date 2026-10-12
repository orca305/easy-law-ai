## Database Naming

- Database table and column names use snake_case.
- Prefer abbreviations for column names.
- Keep table names descriptive rather than excessively abbreviated.

### Column Abbreviations

- name -> nm
- current -> curr
- register -> rgst
- update -> upt
- datetime -> dttm
- number -> no
- code -> cd
- type -> type
- content -> cont
- sequence -> seq
- description -> desc
- provision -> provi
- version -> ver
- parent -> prnt
- relation -> rel
- source -> src
- target -> tgt
- embedding -> embed
- count -> cnt
- context -> ctx

### Common Columns

- registration datetime -> rgst_dttm
- update datetime -> upt_dttm

## Legal Data Modeling Rules

- `law` represents the law itself.
- `provi` represents an internal legal provision or structural node.
- Do not assume legal provision numbers are numeric.
- Preserve the original numbering text.
- Use a separate numeric sequence only for sorting.
- Preserve original legal text separately from RAG chunks.
- Separate embeddings from source legal text.
