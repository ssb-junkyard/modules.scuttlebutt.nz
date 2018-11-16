# server plugins

Server plugins all have a common form and provide methods for call locally within the server, or remotely over a mux-rpc connection.

Many plugins build indexes which help provide more efficient lookups. Some plugins have dependencies on other plugins for these indexes.

Plugins which depend on other plugins have been marked with a `*`
