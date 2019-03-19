# 3GPP

Tools to improve productivity for designing cellular network

## APIs

### ASN.1

#### `asn1.extract(text)`

- Input
  - `text`: `string`
- Output
  - `string` or `null`

Returns a string which only contains ASN.1. For an unexpected case, returns `null`.

This function supports the followings:

- E-UTRA RRC protocol (36.331)
- NR RRC protocol (38.331)

### utils

#### `utils.text.sanitize(text)`

- Input
  - `text`: `string`
- Output
  - `string`

Returns a *sanitized* string. Sanitization includes the followings:

- Removes `\uFFFD` (Unicode REPLACEMENT CHARACTER)
