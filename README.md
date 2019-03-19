# 3GPP

Tools to improve productivity for designing cellular network

## APIs

### ASN.1

#### `asn1.extract(text)`

- Input
  - `text`: `string`
- Output
  - `string`

Returns a string which only contains ASN.1

This function supports the followings:

- E-UTRA RRC protocol (36.331)
- NR RRC protocol (38.331)

### utils

#### `utils.numbering.versionFromString(str)`

- Input
  - `str`: `string`
- Output
  - `{major, technical, editorial}`
  - `major`, `technical`, `editorial`: integer

Returns a *version* object from a version string used in a file name. e.g. `f30` is converted to `{major: 15, technical: 3, editorial: 0}`

#### `utils.text.sanitize(text)`

- Input
  - `text`: `string`
- Output
  - `string`

Returns a *sanitized* string. Sanitization includes the followings:

- Removes `\uFFFD` (Unicode REPLACEMENT CHARACTER)
