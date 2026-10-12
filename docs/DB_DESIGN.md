### law_provisions

Stores the hierarchical structure and content inside a law version.

A single table supports:

- PART
- CHAPTER
- SECTION
- ARTICLE
- PARAGRAPH
- ITEM
- SUBITEM
- ANNEX
- APPENDIX
- ETC

The hierarchy is represented by `prnt_provi_id`.

Main columns:

- id
- law_ver_id
- prnt_provi_id
- provi_type
- src_cd
- disp_no
- norm_no
- sort_seq
- provi_nm
- provi_cont
- enfc_dt
- cont_hash
- rgst_dttm
- upt_dttm

Provision identifiers are stored as strings.

`disp_no` preserves the original legal notation while `sort_seq`
is used only for ordering.
