| Meaning     | Abbreviation |
| ----------- | ------------ |
| name        | nm           |
| current     | curr         |
| register    | rgst         |
| update      | upt          |
| datetime    | dttm         |
| number      | no           |
| code        | cd           |
| type        | type         |
| content     | cont         |
| sequence    | seq          |
| description | desc         |
| provision   | provi        |
| version     | ver          |
| parent      | prnt         |
| relation    | rel          |
| source      | src          |
| target      | tgt          |
| embedding   | embed        |
| count       | cnt          |
| context     | ctx          |

## Legal Provision Numbering

Legal provision numbers are identifiers, not numeric values.

Do not store provision numbers solely as INTEGER.

Possible values include:

- 제10조
- 제10조의2
- ①
- 1.
- 1의2
- 가.
- I
- II
- IV
- A
- A-1

Provision numbering should be separated into:

- `disp_no`: original display value
- `norm_no`: optional normalized value for search/comparison
- `sort_seq`: numeric ordering value

Only `sort_seq` is treated as a numeric ordering value.

The original value in `disp_no` must not be lost during normalization.

## Domain Prefixes

- law: law-level data
- provi: provision-level data
- ver: version data
- rel: relation data
- embed: embedding data

Examples:

- law_id
- law_ver_id
- provi_type
- provi_no
- provi_nm
- provi_cont
- prnt_provi_id
