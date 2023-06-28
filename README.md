##Scissor Documentation

###Hosted url:

The Scissor url shortner is built with NodeJs, Typescript, Redis caching layer, ejs. It has the following features:
* an api to generate shortened URL, given a url.
* a redirect to the target URL.
* an api to get visit statistics for every redirect.
* an HTML page with a form to create a shortner. This page is built with ejs.

The POST request with the redirect is given as follows:

```
 app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })
  res.redirect('/')
});
```
This helps to create a short url from the full url link added to the input field. This saves the new short url.

The urlshortener model is created in the file shortUrl.ts where we have the shortUrlSchema.


A GET request is made to find the shortened url and also to know the number of times it is clicked

```
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})
```