#!/usr/bin/env bash
#!/usr/bin/env bash
set -e

if [ "$1" = "--debug" ]; then
  export UBTOOL_DEBUG=1
  shift
fi

echo "ubtool -----------------"