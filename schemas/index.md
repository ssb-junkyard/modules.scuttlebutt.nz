# Schemas

We use JSON-schemas to specify the shape of messages.

Most of these modules use `is-my-json-valid` to convert these schemas into validators.

This is useful when it comes to filtering messages you're reading out of the database for valid fields, as well as checking the form of messages you're about to publish.
