# URL Shortener Microservice

## Overview

This API shortens a URL.

1) I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

2) If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

3) When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage

```
https://url-shortener-service.herokuapp.com/new/http://www.google.com
```

## Example creation output

```
{ "original_url": "http://www.google.com", "short_url": "https://url-shortener-service.herokuapp.com/abcdef" }
```

## Usage

```
https://url-shortener-service.herokuapp.com/abcdef
```

## Will redirect to

```
http://www.google.com
```