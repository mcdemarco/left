# ToDo

## Blog

* date indices to replace Apache index: https://github.com/tuananh/ArchiveGenerator

### Tags/Classes

* use categories (or more likely, tags) instead of class -- need good tag names
    class    tag
	-----    ---
    long     long(form)  longpost
	short    short(form)  shortpost
	release  software? updates? sharedware
	news     news
	site     blog(keeping)
	(none)   linkpost

	emacs $(grep -l class: _posts/2004-*)

* alphabetize tags (hack Liquid?)



## Conlang

* make one page version



## Notes

Regex for emacs for converting pseudo-en-dashes to pseudo-em-dashes, in the presence of yaml.
\([^\-]\)--\([^\-]\)
\1---\2

Find dos line endings:
grep -c $(printf '\r') _posts/* | grep -v ":0"

