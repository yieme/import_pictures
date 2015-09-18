# Import Pictures
For an array of URL's download the pictures locally

## Usage

```sh
SRC=path_to_json_file DST=path_to_destination_folder MODE=mode node .
```

Defaults:
- `SRC`: `./urls.json`, expects an array of url strings
- `DST`: `pics/`, expects trailing slash
- `MODE`: `755`, valid file mode
- `NUMERIC_ORDER`: if defined then files are saved in numeric order, ex: `1.jpg`...

## License
MIT
