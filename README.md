# 3GPP

Tools to improve productivity for designing cellular network

- [API](#api)
  - [ASN.1](#asn1)
    - [`asn1.extract(text)`](#asn1extracttext)
  - [RAN3 AP](#ran3-ap)
    - [`IDefinitions`](#idefinitions)
    - [`IMsgIeDefinition`](#imsgiedefinition)
    - [`IMsgIeDefinitionElem`](#imsgiedefinitionelem)
    - [`IRangeDefinitionElem`](#irangedefinitionelem)
    - [`IConditionDefinitionElem`](#iconditiondefinitionelem)
    - [`ran3Ap.format(msgIeDefinition[], formatConfig)`](#ran3apformatmsgiedefinition-formatconfig)
    - [`ran3Ap.parse(html)`](#ran3apparsehtml)
  - [Utilities](#utilities)
    - [`IVersion`](#iversion)
    - [`utils.numbering.seriesFromString(specNumStr)`](#utilsnumberingseriesfromstringspecnumstr)
    - [`utils.numbering.versionFromString(versionStr)`](#utilsnumberingversionfromstringversionstr)
    - [`utils.text.sanitize(text)`](#utilstextsanitizetext)
  - [3GPP Web Support](#3gpp-web-support)
    - [`ICalQuery`](#icalquery)
    - [`web.calendar.get(calQuery, cb, ...args)`](#webcalendargetcalquery-cb-args)
    - [`web.specs.list(specNumStr, cb, ...args)`](#webspecslistspecnumstr-cb-args)
- [CLI](#cli)
  - [Extract ASN.1](#extract-asn1)

## API

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

### RAN3 AP

#### `IDefinitions`

```jsonc
{
  // '9.1.1.1': IMsgIeDefinition
  // Below enables to find sectionNumber with message/IE name
  // 'RAN3 MESSAGE NAME': '9.1.1.1'
  [sectionNumberOrTitle: string]: IMsgIeDefinition | string;
}
```

#### `IMsgIeDefinition`

```jsonc
{
  section: string;
  name: string;
  description: string;
  direction: string;
  definition: IMsgIeDefinitionElem[];
  range: IRangeDefinitionElem[];
  condition: IConditionDefinitionElem[];
}
```

#### `IMsgIeDefinitionElem`

```jsonc
{
  'ie/group name': string;
  'presence': string;
  'range': string;
  'ie type and reference': string;
  'semantics description': string;
  'criticality'?: string;
  'assigned criticiality'?: string;
  'depth': number;
}
```

#### `IRangeDefinitionElem`

```jsonc
{
  'range bound': string;
  'explanation': string;
}
```

#### `IConditionDefinitionElem`

```jsonc
{
  condition: string;
  explanation: string;
}
```

#### `ran3Ap.format(msgIeDefinition[], formatConfig)`

- Input
  - `msgIeDefinition`: `IMsgIeDefinition`
  - `formatConfig`: `json` object (optional)
- Output
  - `wb`: [excel4node] workbook object

Generates an excel workbook. Each worksheet renders each item of `definition[]`. `definition`

[excel4node]: https://www.npmjs.com/package/excel4node

#### `ran3Ap.parse(html)`

- Input
  - `html`: `string`
- Output
  - `IDefinitions`

Parses a RAN3 AP spec document (in an HTML format) and returns `IDefinitions` object

### Utilities

#### `IVersion`

```jsonc
{
  major: number;
  technical: number;
  editorial: number;
}
```

- `major`, `technical`, `editorial`: integer

Corresponds to 3GPP specification [version numbering scheme]

[version numbering scheme]: http://www.3gpp.org/specifications/specification-numbering/81-version-numbering-scheme

#### `utils.numbering.seriesFromString(specNumStr)`

- Input
  - `specNumStr`: `string`
- Output
  - `string`

Returns a series number (in a string). e.g. `38.331` returns `38`

#### `utils.numbering.versionFromString(versionStr)`

- Input
  - `versionStr`: `string`
- Output
  - [`IVersion`](#iversion) object

Returns a `IVersion` object from a version string used in a file name. e.g. `f30` is converted to `{major: 15, technical: 3, editorial: 0}`

#### `utils.text.sanitize(text)`

- Input
  - `text`: `string`
- Output
  - `string`

Returns a *sanitized* string. Sanitization includes the followings:

- Removes `\uFFFD` (Unicode REPLACEMENT CHARACTER)
- Converts `\u3000` (Unicode IDEOGRAPHIC SPACE) into normal space

### 3GPP Web Support

#### `ICalQuery`

```jsonc
{
  techBodyStr: string;
  includeSub?: boolean;
  from?: Date;
  to?: Date;
  detail?: boolean;
}
```


- `techBodyStr`: `string`. Technical body name.
  - Supports `RAN`, `RAN1`, `RAN2`, `RAN3`, `RAN4` currently
- `includeSub`: `boolean`. Whether to include sub technical bodies. `false` if absent
- `from`: `Date`. *Today* if absent 
- `to`: `Date`. *indefinite* if absent
- `detail`: `boolean`. Whether to request detailed information. `false` if absent

#### `web.calendar.get(calQuery, cb, ...args)`

- Input
  - `calQuery`: [`ICalQuery`](#icalquery) object
- `cb(e, cal, ...args)`
  - `e`: `Error`
  - `cal`: Output *Calendar* object. Refer [npm/node-ical]
  - `...args`: additional arguments

[npm/node-ical]: https://www.npmjs.com/package/node-ical

#### `web.specs.list(specNumStr, cb, ...args)`

- Input
  - `specNumStr`: `string`
- `cb(e, specFiles, ...args)`
  - `e`: `Error`
  - `specFiles`: Output `Array` of `{type, name, size, date, rights, owner, group, target, sticky, version, url}`
    - `version`: [`IVersion`](#iversion) object
    - `url`: `string`
    - The others: Refer `ftp.ListingElement` of [npm/ftp]
  - `...args`: additional arguments

[npm/ftp]: https://www.npmjs.com/package/ftp

Gets list of specification files and calls a callback `cb(null, specFiles, args)` if successful, otherwise `cb(e, null, args)`

## CLI

### Extract ASN.1

```sh
node dist/asn1/extract.js <protocol> <text file>
```

Extract ASN.1 from `<text file>` and prints to the standard output

Currenlty only `RRC` protocol is supported
