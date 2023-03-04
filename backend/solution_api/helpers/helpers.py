import re

def sanitize_strng(strng):
    regex = '[0-9, :, /, %]'
    return re.sub(regex, "", strng)