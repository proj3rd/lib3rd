# 3GPP

Tools to improve productivity for designing cellular network

- [API](#api)
- [CLI](#cli)
  - [Extract ASN.1](#extract-asn1)
  - [Format RAN3 AP Messages/IEs](#format-ran3-ap-messagesies)

## API

See https://gsongsong.github.io/3gpp

## CLI

### Extract ASN.1

```sh
node dist/asn1/extract.js <protocol> <text file>
```

Extracts ASN.1 from `<text file>` and prints to the standard output. Currenlty only `RRC` protocol is supported

### Format RAN3 AP Messages/IEs

```sh
node dist/ran3Ap/format.js <html file> <msg/IE name> <expand>
```

Reads a RAN3 AP document from `<html file>`, generates an Excel worksheet for a given `<msg/IE name>` and stores it into a filesystem. If  `<msg/IE name>` is  `all`, it generates worksheets for all messages and IEs. If `<needExpand>` is `expand`, it expands sub IEs.
