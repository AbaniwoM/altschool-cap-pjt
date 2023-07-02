## Scissor Documentation

### Hosted url: [here](https://scissor-app-4sia.onrender.com/)

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

The shortUrl models are contained in the shortUrl.ts file which has the shortUrlSchema for full, short and clicks.

```
const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})
```

The index.ejs file is where the simple UI for the scissor app is formed. It is the back bone of the functionality we see in the application.

Ref: [here](https://blog.webdevsimplified.com/)
