interface HtmlParser {
  getUrls(url: string): string[];
}



function crawl(
  startUrl: string, 
  htmlParser: { [key: string]: string[] }
): string[] {
  const visited = new Set<string>();
  const queue: string[] = [startUrl];
  visited.add(startUrl);

  const getHostName = (url: string) => {
    const protocolEndIndex = url.indexOf("/", 8);
    return protocolEndIndex === -1 
      ? url 
      : url.slice(0, protocolEndIndex);
  };

  const startHostName = getHostName(startUrl);

  while (queue.length > 0) {
    const url = queue.shift()!;
    const urls = htmlParser[url];

    for (const nextUrl of urls) {
      if (getHostName(nextUrl) === startHostName
          && !visited.has(nextUrl)
      ) {
        visited.add(nextUrl);
        queue.push(nextUrl);
      }
    }
  }

  return Array.from(visited);
}
export function crawlDBG(){
  const tests = [
    {
      input: {
        startUrl: "http://example.com",
        htmlParser: {
          "http://example.com": [
            "http://example.com/a",  // Внутренний
            "http://example.com/b",  // Внутренний
            "http://other.com/c"     // Внешний (должен быть проигнорирован)
          ],
          "http://example.com/a": [
            "http://example.com",     // Внутренний (уже посещён)
            "http://other.com/d",     // Внешний (должен быть проигнорирован)
            "http://example.com/c"    // Внутренний
          ],
          "http://example.com/b": [
            "http://example.org/e"    // Внешний (должен быть проигнорирован)
          ],
          "http://example.com/c": []
        }
      },
      expected: [
        "http://example.com",
        "http://example.com/a",
        "http://example.com/b",
        "http://example.com/c"
      ]
    },
    {
      input: {
        startUrl: "http://news.yahoo.com",
        htmlParser: {
          "http://news.yahoo.com": [
            "http://news.yahoo.com/news",      // Внутренний
            "http://news.yahoo.com/sports",    // Внутренний
            "http://google.com"                // Внешний (должен быть проигнорирован)
          ],
          "http://news.yahoo.com/news": [
            "http://news.yahoo.com",           // Внутренний (уже посещён)
            "http://news.yahoo.com/sports",    // Внутренний (уже посещён)
            "http://news.google.com"           // Внешний (должен быть проигнорирован)
          ],
          "http://news.yahoo.com/sports": []
        }
      },
      expected: [
        "http://news.yahoo.com",
        "http://news.yahoo.com/news",
        "http://news.yahoo.com/sports"
      ]
    },
    {
      input: {
        startUrl: "http://example.com",
        htmlParser: {
          "http://example.com": [
            "http://example.com/about",        // Внутренний
            "http://malicious.com"             // Внешний (должен быть проигнорирован)
          ],
          "http://example.com/about": []
        }
      },
      expected: [
        "http://example.com",
        "http://example.com/about"
      ]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = crawl(test.input.startUrl, test.input.htmlParser);
    const success = JSON.stringify(result.sort()) === JSON.stringify(test.expected.sort());
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${JSON.stringify(test.expected)}`);
      console.log(`got: ${JSON.stringify(result)}`);
    }
  });
  
}