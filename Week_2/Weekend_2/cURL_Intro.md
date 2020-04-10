# command line cURL

* cURL is a command line utility that is used to make HTTP requests to a given URL and it ouputs the response

* things u can do to a cURL

1. Download a single file 
  * just typing a curl and a something will load it to your terminal to save it, give it a path with a > symbol to where to downlaod it
2. save the curl
    * use a -o to save a curl to a provided place
    * use -O to save the url to a filename taken frmo the url
3. Fetch Multiple FIles at a time
  * use the syntax curl -O URL1 -O URL2
4. Follow HTTP location headers with -L option
5. Continue/REsume a pervious Download
  * use curl -C option to continue a big download that was stopped
  * Ctrl-C to stop in between a download
6. Limit the rate of Data Transfer
  * curl --limit-rate (number)B
7. Download a file only if it is modified before/after the given time
  * -z option in curle to tell it to download only after a particular time it wa smodified after
8. Pass HTTP authentication in cURL
  * can curl -u username:password URL  