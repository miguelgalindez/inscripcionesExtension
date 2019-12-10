import { UrlSegment, UrlMatchResult } from '@angular/router';

const isMatched = (url: string, path: string): boolean =>
  url && url.startsWith(path);

const getCurrentUrl = (urlSegments: UrlSegment[]): string =>
  urlSegments && urlSegments.length === 1 ? urlSegments[0].path : null;

const buildMatchResult = (
  urlSegments: UrlSegment[],
  matched: boolean,
  consume: boolean = true
) => {
  if (urlSegments.length === 1 && matched) {
    return consume ? { consumed: urlSegments } : { consumed: [] };
  } else if (!urlSegments.length) {
    return { consumed: urlSegments };
  }
  return null;
};

export const matcherForSinglePath = (path: string, consume: boolean = true) => {
  return (urlSegments: UrlSegment[]): UrlMatchResult => {
    const currentUrl = getCurrentUrl(urlSegments);
    const matched = isMatched(currentUrl, path);
    return buildMatchResult(urlSegments, matched, consume);
  };
};
