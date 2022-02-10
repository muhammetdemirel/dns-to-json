# DNS to JSON

Module that allows you to query DNS information and display data in JSON format.

## Installation

`npm install dns-to-json`

## Usage

```
(async function(){
  const dns = require('dns-to-json');

  var results = await dns.lookup('regexart.com');
  console.log(JSON.stringify(results, null, 2));
})()
```

## Output: 200

```
{
  "statusCode": 200,
  "dns": {
    "a": [
      "216.239.32.21",
      "216.239.38.21",
      "216.239.34.21",
      "216.239.36.21"
    ],
    "aaaa": [
      "2001:4860:4802:38::15",
      "2001:4860:4802:32::15",
      "2001:4860:4802:36::15",
      "2001:4860:4802:34::15"
    ],
    "ns": [
      "ns-cloud-b4.googledomains.com",
      "ns-cloud-b2.googledomains.com",
      "ns-cloud-b3.googledomains.com",
      "ns-cloud-b1.googledomains.com"
    ],
    "cname": null,
    "mx": null,
    "txt": null,
    "srv": null,
    "soa": {
      "nsname": "ns-cloud-b1.googledomains.com",
      "hostmaster": "cloud-dns-hostmaster.google.com",
      "serial": 8,
      "refresh": 21600,
      "retry": 3600,
      "expire": 259200,
      "minttl": 300
    },
    "caa": null,
    "naptr": null,
    "ptr": null
  }
}
```

## Output: 404

```
{
  "statusCode": 404,
  "message": "..."
}
```