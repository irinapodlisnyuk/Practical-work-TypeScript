# Installation
> `npm install --save @types/is-glob`

# Summary
This package contains type definitions for is-glob (https://github.com/micromatch/is-glob).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/is-glob.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/is-glob/index.d.ts)
````ts
declare function isGlob(pattern?: string | string[] | null, options?: isGlob.Options): boolean;

declare namespace isGlob {
    interface Options {
        /**
         * When `false` the behavior is less strict in determining if a pattern is a glob. Meaning that some patterns
         * that would return false may return true. This is done so that matching libraries like micromatch
         * have a chance at determining if the pattern is a glob or not.
         */
        strict?: boolean | undefined;
    }
}

export = isGlob;

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 03:09:37 GMT
 * Dependencies: none

# Credits
These definitions were written by [mrmlnc](https://github.com/mrmlnc).
