export const httpStatusCodes = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required",
};

// generate all http status code items, and each item should contain the below values, and the item schema is in below:
export const httpStatusCodesWithDetails = 
[
  {
    "code": 100,
    "meaning": "Continue",
    "explanation": "The 100 Continue informational status code indicates that the initial part of a request has been received and has not yet been rejected by the server. The server intends that the client should continue sending the remainder of the request or, if the request has already been completed, ignore this response. The ultimate response to the request is separate from the status code 100.",
    "usage": "This status code is used to inform the client that the initial part of the request has been received, and they should continue with the rest of the request or ignore the message if the request is already complete.",
    "attentions": [
      "This status code is part of the HTTP/1.1 specification and is sent when the server wishes to improve network efficiency by confirming that large requests are necessary before the client sends them.",
      "The client must be prepared to discard this preliminary status and wait for the final response.",
      "Clients that cannot process a 100 Continue response should not include the `Expect: 100-continue` header in requests."
    ],
    "sample": ``
  },
  {
    "code": 101,
    "meaning": "Switching Protocols",
    "explanation": "The 101 Switching Protocols status code indicates that the server understands and is willing to comply with the client's request, via the Upgrade header field, to switch protocols. This is sent in response to a client's request that includes an Upgrade request header to indicate the protocol it wishes to switch to.",
    "usage": "This status code is used primarily to switch from HTTP to a protocol with different features, like WebSocket.",
    "attentions": [
      "The server must ensure the switch can be made before sending this response.",
      "The server must send an Upgrade header in the response to indicate the protocol it switched to."
    ]
  },
  {
    "code": 102,
    "meaning": "Processing",
    "explanation": "The 102 Processing status code is an interim response used to inform the client that the server has accepted the complete request but has not yet completed it. This status code is usually sent to prevent a client from timing out and assuming the request was lost.",
    "usage": "Primarily used in WebDAV, this status indicates that the server is processing the request but no response is available yet.",
    "attentions": [
      "Should not be sent unless the server has a reasonable expectation that the request will take significant time to complete.",
      "Clients should be prepared to wait for some time or implement a mechanism to handle intermediate responses."
    ]
  },
  {
    "code": 103,
    "meaning": "Early Hints",
    "explanation": "The 103 Early Hints status code is used to return some response headers before final HTTP message. It allows a server to send the response headers ahead of the final response. This helps to start loading resources while the server is still preparing a response.",
    "usage": "Useful for performance optimisations, the server can hint to the client which resources can be preloaded or fetched early.",
    "attentions": [
      "This status code mostly concerns frontend performance optimisation and should be used when significant load times are expected.",
      "Clients should be prepared to handle a subsequent final response after the early hints."
    ]
  },
  {
    "code": 200,
    "meaning": "OK",
    "explanation": "The 200 OK status code indicates that the HTTP request was received and processed successfully by the server. It's the standard response for successful HTTP requests, and the actual response will depend on the request method used. In a GET request, the response will contain the requested data. In a POST request, the response might contain a message about the result of the operation.",
    "usage": "This status code is used to convey that the server has successfully processed the request and the client can expect to receive the requested information or confirmation of the success of the request.",
    "attentions": [
      "While a 200 status code signifies a successful request, it's important to check the content of the response to ensure it contains the expected data or outcome.",
      "In cases where a new resource has been created by a POST request, a 201 status code (Created) might be more appropriate to signify that the resource was successfully created.",
      "Be aware of idempotency with certain request methods like PUT or DELETE; successful requests should yield the same status code upon repeated execution.",
      "Use appropriate content negotiation if the server expects to return different formats of data, ensuring that the Content-Type header in the response is set correctly."
    ]
  },
  {
    "code": 201,
    "meaning": "Created",
    "explanation": "The 201 Created status code indicates that the request has been fulfilled and has resulted in one or more new resources being created. The new resources are effectively created before the response is sent and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the Location header.",
    "usage": "This status code is used to inform the client that a new resource has been successfully created as a result of the request.",
    "attentions": [
      "The server must include a Location header in the response to indicate the URL of the newly created resource.",
      "The response body should contain a representation of the new resource, and the client should be able to use the URL in the Location header to access the new resource."
    ],
    "sample": `
      let items = [];
      export default function handler(req, res) {
        if (req.method === 'POST') {
          const newItem = req.body;
          newItem.id = items.length + 1;
          items.push(newItem);
          res.status(201).location(\`/api/items/\${newItem.id}\`).json(newItem);
        } else {
          res.setHeader('Allow', ['POST']);
          res.status(405).end(\`Method \${req.method} Not Allowed\`);
        }
      }
      `
  },
  {
    "code": 202,
    "meaning": "Accepted",
    "explanation": "The 202 Accepted status code indicates that the request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.",
    "usage": "This status code is used to inform the client that the request has been accepted and will be processed at a later time.",
    "attentions": [
      "The server should include an indication of the request's current status in the response, if it has one.",
      "The server should include an estimate of when the request will be processed, if possible."
    ]
  },
  {
    "code": 203,
    "meaning": "Non-Authoritative Information",
    "explanation": "The 203 Non-Authoritative Information status code indicates that the request was successful but the enclosed payload has been modified from that of the origin server's 200 OK response by a transforming proxy.",
    "usage": "This status code is used to inform the client that the response has been modified by a proxy and might not be the same as the response from the origin server.",
    "attentions": [
      "The server should include information about the proxy that modified the response in the response message.",
      "The response should include information about the original server's response if possible."
    ]
  },
  {
    "code": 204,
    "meaning": "No Content",
    "explanation": "The 204 No Content status code indicates that the server has successfully processed the request and that there is no additional content to send in the response payload body. A header might still be included in the response to provide information about the request.",
    "usage": "This status code is used to inform the client that the request was processed successfully but there is no content to return.",
    "attentions": [
      "The server should include information about the request in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 205,
    "meaning": "Reset Content",
    "explanation": "The 205 Reset Content status code is sent as part of a request to inform the client to reset the document view which caused the request to be sent. This response is primarily used to allow input forms to be cleared of the entered information.",
    "usage": "This status code is used to inform the client that the input form should be reset.",
    "attentions": [
      "The server should include information about the request in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 206,
    "meaning": "Partial Content",
    "explanation": "The 206 Partial Content status code indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the request's Range header field.",
    "usage": "This status code is used to inform the client that the server is returning a partial representation of the requested resource.",
    "attentions": [
      "The server should include information about the range request in the response message if possible.",
      "The response should include a Content-Range header to indicate the partial range of the response."
    ]
  },
  {
    "code": 207,
    "meaning": "Multi-Status",
    "explanation": "The 207 Multi-Status status code provides status for multiple independent operations. It allows the client to understand the status of several different operations in a single response.",
    "usage": "This status code is used to inform the client about the status of multiple independent operations in a single response.",
    "attentions": [
      "The response should include information about the status of each operation in the response message.",
      "The response should include a message body with information about the status of each operation."
    ]
  },
  {
    "code": 208,
    "meaning": "Already Reported",
    "explanation": "The 208 Already Reported status code can be used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.",
    "usage": "This status code is used to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.",
    "attentions": [
      "The server should include information about the collection in the response message if possible.",
      "The response should include a message body with information about the collection."
    ]
  },
  {
    "code": 226,
    "meaning": "IM Used",
    "explanation": "The 226 IM Used status code is a response to the A-IM request header field from a client, and indicates that the server has changed the resource's content type as a result.",
    "usage": "This status code is used to inform the client that the server has changed the resource's content type as a result of the A-IM request header field.",
    "attentions": [
      "The server should include information about the resource in the response message if possible.",
      "The response should include a message body with information about the resource."
    ]
  },
  {
    "code": 300,
    "meaning": "Multiple Choices",
    "explanation": "The 300 Multiple Choices status code indicates that the target resource has more than one representation, each with its own specific location, and the user or user agent can select a preferred representation and redirect its request to that location.",
    "usage": "This status code is used to inform the client that the target resource has more than one representation and the client can select a preferred representation.",
    "attentions": [
      "The server should include information about the representations in the response message if possible.",
      "The response should include a message body with information about the representations."
    ]
  },
  {
    "code": 301,
    "meaning": "Moved Permanently",
    "explanation": "The 301 status code indicates that the requested resource has been permanently moved to a new URL provided by the Location header. The server sends this response when a resource or page has been permanently moved to another address.",
    "usage": "Use this status code to inform clients that the resource they are requesting is now at a new permanent URL, and they should update their bookmarks and links.",
    "attentions": [
      "Since the redirect is permanent, search engines will update their links to the new URL.",
      "Do not use this code for temporary content changes; instead, use a 302 Found status code for temporary redirections."
    ]
  },
  {
    "code": 302,
    "meaning": "Found",
    "explanation": "The 302 Found status code indicates that the requested resource resides temporarily under a different URL. The server sends this response when the requested resource has been temporarily moved to a different address.",
    "usage": "Use this status code to inform clients that the resource they are requesting is temporarily at a different URL, and they should continue to use the original URL.",
    "attentions": [
      "The client should continue to use the original URL for future requests.",
      "This status code is commonly used for temporary content changes; for permanent changes, use a 301 Moved Permanently status code."
    ]
  },
  {
    "code": 303,
    "meaning": "See Other",
    "explanation": "The 303 See Other status code indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request.",
    "usage": "Use this status code to inform clients that the resource they are requesting is temporarily at a different URL, and they should continue to use the original URL.",
    "attentions": [
      "The client should continue to use the original URL for future requests.",
      "This status code is commonly used for temporary content changes; for permanent changes, use a 301 Moved Permanently status code."
    ]
  },
  {
    "code": 304,
    "meaning": "Not Modified",
    "explanation": "The 304 Not Modified status code indicates that the client's cached copy is up to date, so the server sends this response to inform the client that the requested resource has not been modified since the last request.",
    "usage": "Use this status code to inform clients that their cached copy of the resource is up to date and they can continue to use it.",
    "attentions": [
      "The server should include information about the last modified time in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 305,
    "meaning": "Use Proxy",
    "explanation": "The 305 Use Proxy status code was defined in a previous version of the HTTP specification and is now deprecated. It was used to inform the client that it should use a proxy server to access the requested resource.",
    "usage": "This status code is no longer used and has been deprecated.",
    "attentions": [
      "The server should include information about the proxy server in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 307,
    "meaning": "Temporary Redirect",
    "explanation": "The 307 Temporary Redirect status code indicates that the target resource resides temporarily under a different URL. The server sends this response when the requested resource has been temporarily moved to a different address.",
    "usage": "Use this status code to inform clients that the resource they are requesting is temporarily at a different URL, and they should continue to use the original URL.",
    "attentions": [
      "The client should continue to use the original URL for future requests.",
      "This status code is commonly used for temporary content changes; for permanent changes, use a 301 Moved Permanently status code."
    ]
  },
  {
    "code": 308,
    "meaning": "Permanent Redirect",
    "explanation": "The 308 Permanent Redirect status code indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.",
    "usage": "Use this status code to inform clients that the resource they are requesting has been permanently moved to a new URL, and they should update their bookmarks and links.",
    "attentions": [
      "Since the redirect is permanent, search engines will update their links to the new URL.",
      "Do not use this code for temporary content changes; instead, use a 302 Found status code for temporary redirections."
    ]
  },
  {
    "code": 400,
    "meaning": "Bad Request",
    "explanation": "The 400 Bad Request status code indicates that the server cannot process the request due to a client error, such as malformed request syntax, invalid request message framing, or deceptive request routing.",
    "usage": "This status code is used to communicate to the client that the server was unable to understand the request due to invalid syntax.",
    "attentions": [
      "The exact error should be explained in the response message if possible.",
      "Clients should not repeat the same request without modifying the syntax or addressing the error."
    ]
  },
  {
    "code": 401,
    "meaning": "Unauthorized",
    "explanation": "The 401 Unauthorized status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.",
    "usage": "This status is used when authentication is required and has either failed or not been provided. The client should re-request with the required credentials.",
    "attentions": [
      "401 responses must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.",
      "If the request already included authentication credentials, this response indicates that authorization has been refused for those credentials."
    ]
  },
  {
    "code": 402,
    "meaning": "Payment Required",
    "explanation": "The 402 Payment Required status code is reserved for future use and is intended to be used when payment is required for the requested resource.",
    "usage": "This status code is not currently used and is reserved for future use.",
    "attentions": [
      "The server should include information about the payment requirements in the response message if possible.",
      "The response should include a message body with information about the payment requirements."
    ]
  },
  {
    "code": 403,
    "meaning": "Forbidden",
    "explanation": "The 403 Forbidden status code indicates that the server understands the request but refuses to authorize it. Unlike 401 Unauthorized, re-authenticating will make no difference.",
    "usage": "This status code should be used when the server wants to deny access to a valid user who doesn’t have permission for the given resource.",
    "attentions": [
      "If the user does not have the necessary permissions, the client should handle this gracefully, often by directing them to an error page."
    ]
  },
  {
      "code": 404,
      "meaning": "Not Found",
      "explanation": "The 404 Not Found status code indicates that the server cannot find the requested resource. This status is commonly used when the server has no response to the request.",
      "usage": "This status code is used to inform the client that the server cannot find the requested resource.",
      "attentions": [
        "The server should include information about the resource in the response message if possible.",
        "The response should not include a message body."
      ]
  },
  {
    "code": 405,
    "meaning": "Method Not Allowed",
    "explanation": "The 405 Method Not Allowed status code indicates that the request method is known by the server but has been disabled and cannot be used. The server must include an Allow header in the response to inform the client which methods are allowed.",
    "usage": "This status code is used to inform the client that the request method is not allowed for the given resource.",
    "attentions": [
      "The server should include information about the allowed methods in the response message if possible.",
      "The response should include an Allow header to indicate the allowed methods."
    ]
  },
  {
    "code": 406,
    "meaning": "Not Acceptable",
    "explanation": "The 406 Not Acceptable status code indicates that the server cannot produce a response that is acceptable to the client according to the request's Accept headers.",
    "usage": "This status code is used to inform the client that the server cannot produce a response that is acceptable to the client.",
    "attentions": [
      "The server should include information about the acceptable response in the response message if possible.",
      "The response should include a message body with information about the acceptable response."
    ]
  },
  {
    "code": 407,
    "meaning": "Proxy Authentication Required",
    "explanation": "The 407 Proxy Authentication Required status code is similar to 401 Unauthorized, but it indicates that the client must first authenticate itself with the proxy.",
    "usage": "This status code should be used when the client must first authenticate itself with the proxy.",
    "attentions": [
      "The server should include information about the proxy in the response message if possible.",
      "The response should include a message body with information about the proxy."
    ]
  },
  {
    "code": 408,
    "meaning": "Request Timeout",
    "explanation": "The 408 Request Timeout status code indicates that the server did not receive a complete request message within the time that it was prepared to wait.",
    "usage": "This status code should be used when the server did not receive a complete request message within the time that it was prepared to wait.",
    "attentions": [
      "The server should include information about the timeout duration in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 409,
    "meaning": "Conflict",
    "explanation": "The 409 Conflict status code indicates that the request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.",
    "usage": "This status code should be used when the request could not be completed due to a conflict with the current state of the target resource.",
    "attentions": [
      "The server should include information about the conflict in the response message if possible.",
      "The response should include a message body with information about the conflict."
    ]
  },
  {
    "code": 410,
    "meaning": "Gone",
    "explanation": "The 410 Gone status code indicates that the target resource is no longer available at the server and no forwarding address is known. This condition is expected to be considered permanent.",
    "usage": "This status code should be used when the target resource is no longer available at the server and no forwarding address is known.",
    "attentions": [
      "The server should include information about the resource in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 411,
    "meaning": "Length Required",
    "explanation": "The 411 Length Required status code indicates that the server refuses to accept the request without a defined Content-Length header.",
    "usage": "This status code should be used when the server refuses to accept the request without a defined Content-Length header.",
    "attentions": [
      "The server should include information about the required Content-Length in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 412,
    "meaning": "Precondition Failed",
    "explanation": "The 412 Precondition Failed status code indicates that one or more conditions given in the request header fields evaluated to false when tested on the server.",
    "usage": "This status code should be used when one or more conditions given in the request header fields evaluated to false when tested on the server.",
    "attentions": [
      "The server should include information about the failed conditions in the response message if possible.",
      "The response should include a message body with information about the failed conditions."
    ]
  },
  {
    "code": 413,
    "meaning": "Payload Too Large",
    "explanation": "The 413 Payload Too Large status code indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.",
    "usage": "This status code should be used when the server is refusing to process a request because the request payload is larger than the server is willing or able to process.",
    "attentions": [
      "The server should include information about the maximum payload size in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 414,
    "meaning": "URI Too Long",
    "explanation": "The 414 URI Too Long status code indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.",
    "usage": "This status code should be used when the server is refusing to service the request because the request-target is longer than the server is willing to interpret.",
    "attentions": [
      "The server should include information about the maximum URI length in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 415,
    "meaning": "Unsupported Media Type",
    "explanation": "The 415 Unsupported Media Type status code indicates that the server is refusing to service the request because the payload format is in an unsupported format.",
    "usage": "This status code should be used when the server is refusing to service the request because the payload format is in an unsupported format.",
    "attentions": [
      "The server should include information about the supported media types in the response message if possible.",
      "The response should include a message body with information about the supported media types."
    ]
  },
  {
    "code": 416,
    "meaning": "Range Not Satisfiable",
    "explanation": "The 416 Range Not Satisfiable status code indicates that the server cannot satisfy the range request due to the current state of the target resource.",
    "usage": "This status code should be used when the server cannot satisfy the range request due to the current state of the target resource.",
    "attentions": [
      "The server should include information about the range request in the response message if possible.",
      "The response should include a message body with information about the range request."
    ]
  },
  {
    "code": 417,
    "meaning": "Expectation Failed",
    "explanation": "The 417 Expectation Failed status code indicates that the server cannot meet the requirements of the Expect request-header field.",
    "usage": "This status code should be used when the server cannot meet the requirements of the Expect request-header field.",
    "attentions": [
      "The server should include information about the failed expectations in the response message if possible.",
      "The response should include a message body with information about the failed expectations."
    ]
  },
  {
    "code": 418,
    "meaning": "I'm a Teapot",
    "explanation": "The 418 I'm a Teapot status code was defined in the original Hyper Text Coffee Pot Control Protocol as an April Fools' joke. It is not expected to be implemented by actual HTTP servers.",
    "usage": "This status code is not expected to be implemented by actual HTTP servers.",
    "attentions": [
      "The server should include information about the teapot in the response message if possible.",
      "The response should include a message body with information about the teapot."
    ]
  },
  {
    "code": 421,
    "meaning": "Misdirected Request",
    "explanation": "The 421 Misdirected Request status code is used in a situation where the server is not able to produce a response for the target resource due to a connection failure with the client.",
    "usage": "This status code should be used when the server is not able to produce a response for the target resource due to a connection failure with the client.",
    "attentions": [
      "The server should include information about the connection failure in the response message if possible.",
      "The response should include a message body with information about the connection failure."
    ]
  },
  {
    "code": 422,
    "meaning": "Unprocessable Entity",
    "explanation": "The 422 Unprocessable Entity status code indicates that the server understands the content type of the request entity and the syntax of the request entity is correct, but it was unable to process the contained instructions.",
    "usage": "This status code should be used when the server understands the content type of the request entity and the syntax of the request entity is correct, but it was unable to process the contained instructions.",
    "attentions": [
      "The server should include information about the unprocessable entity in the response message if possible.",
      "The response should include a message body with information about the unprocessable entity."
    ]
  },
  {
    "code": 423,
    "meaning": "Locked",
    "explanation": "The 423 Locked status code indicates that the source or destination resource of a method is locked. This status code is used to prevent unauthorized access to the resource.",
    "usage": "This status code should be used to prevent unauthorized access to the resource.",
    "attentions": [
      "The server should include information about the locked resource in the response message if possible.",
      "The response should include a message body with information about the locked resource."
    ]
  },
  {
    "code": 424,
    "meaning": "Failed Dependency",
    "explanation": "The 424 Failed Dependency status code indicates that the method could not be performed on the resource because the requested action depended on another action and that action failed.",
    "usage": "This status code should be used when the method could not be performed on the resource because the requested action depended on another action and that action failed.",
    "attentions": [
      "The server should include information about the failed dependency in the response message if possible.",
      "The response should include a message body with information about the failed dependency."
    ]
  },
  {
    "code": 425,
    "meaning": "Too Early",
    "explanation": "The 425 Too Early status code is used to inform the client that the server is unwilling to risk processing a request that might be replayed, and that the client should wait and try again later.",
    "usage": "This status code should be used to inform the client that the server is unwilling to risk processing a request that might be replayed, and that the client should wait and try again later.",
    "attentions": [
      "The server should include information about the replay risk in the response message if possible.",
      "The response should include a message body with information about the replay risk."
    ]
  },
  {
    "code": 426,
    "meaning": "Upgrade Required",
    "explanation": "The 426 Upgrade Required status code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.",
    "usage": "This status code should be used when the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.",
    "attentions": [
      "The server should include information about the required protocol upgrade in the response message if possible.",
      "The response should include a message body with information about the required protocol upgrade."
    ]
  },
  {
    "code": 428,
    "meaning": "Precondition Required",
    "explanation": "The 428 Precondition Required status code indicates that the server requires the request to be conditional.",
    "usage": "This status code should be used when the server requires the request to be conditional.",
    "attentions": [
      "The server should include information about the required precondition in the response message if possible.",
      "The response should include a message body with information about the required precondition."
    ]
  },
  {
    "code": 429,
    "meaning": "Too Many Requests",
    "explanation": "The 429 Too Many Requests status code indicates that the user has sent too many requests in a given amount of time (rate limiting).",
    "usage": "This status code should be used when the user has sent too many requests in a given amount of time (rate limiting).",
    "attentions": [
      "The server should include information about the rate limit in the response message if possible.",
      "The response should include a message body with information about the rate limit."
    ]
  },
  {
    "code": 431,
    "meaning": "Request Header Fields Too Large",
    "explanation": "The 431 Request Header Fields Too Large status code indicates that the server is unwilling to process the request because its header fields are too large.",
    "usage": "This status code should be used when the server is unwilling to process the request because its header fields are too large.",
    "attentions": [
      "The server should include information about the maximum header size in the response message if possible.",
      "The response should not include a message body."
    ]
  },
  {
    "code": 451,
    "meaning": "Unavailable For Legal Reasons",
    "explanation": "The 451 Unavailable For Legal Reasons status code indicates that the server is denying access to the resource as a consequence of a legal demand.",
    "usage": "This status code should be used when the server is denying access to the resource as a consequence of a legal demand.",
    "attentions": [
      "The server should include information about the legal demand in the response message if possible.",
      "The response should include a message body with information about the legal demand."
    ]
  },
  {
    "code": 500,
    "meaning": "Internal Server Error",
    "explanation": "The 500 Internal Server Error status code indicates that the server has encountered an unexpected condition that prevented it from fulfilling the request.",
    "usage": "This generic error message is given when no more specific message is suitable. It's a catch-all for when the server throws an exception that is not handled.",
    "attentions": [
      "The server should log this error with details to monitor for patterns or recurring issues.",
      "A more detailed message should be given if possible so that the client developer can investigate the issue further."
    ]
  },
  {
    "code": 501,
    "meaning": "Not Implemented",
    "explanation": "The 501 Not Implemented status code indicates that the server does not support the functionality required to fulfill the request. This is the appropriate response when the server does not recognize the request method and is not capable of supporting it for any resource.",
    "usage": "This status code should be used when the server does not support the functionality required to fulfill the request.",
    "attentions": [
      "The server should include information about the unsupported functionality in the response message if possible.",
      "The response should include a message body with information about the unsupported functionality."
    ]
  },
  {
    "code": 502,
    "meaning": "Bad Gateway",
    "explanation": "The 502 Bad Gateway status code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
    "usage": "This status code should be used when the server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
    "attentions": [
      "The server should include information about the upstream server in the response message if possible.",
      "The response should include a message body with information about the upstream server."
    ]
  },
  {
    "code": 503,
    "meaning": "Service Unavailable",
    "explanation": "The 503 Service Unavailable status code indicates that the server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.",
    "usage": "This status code should be used when the server is not ready to handle the request.",
    "attentions": [
      "The server should include information about the unavailability in the response message if possible.",
      "The response should include a message body with information about the unavailability."
    ]
  },
  {
    "code": 504,
    "meaning": "Gateway Timeout",
    "explanation": "The 504 Gateway Timeout status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI or some other auxiliary server it needed to access in order to complete the request.",
    "usage": "This status code should be used when the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI or some other auxiliary server it needed to access in order to complete the request.",
    "attentions": [
      "The server should include information about the upstream server in the response message if possible.",
      "The response should include a message body with information about the upstream server."
    ]
  },
  {
    "code": 505,
    "meaning": "HTTP Version Not Supported",
    "explanation": "The 505 HTTP Version Not Supported status code indicates that the server does not support the HTTP protocol version used in the request.",
    "usage": "This status code should be used when the server does not support the HTTP protocol version used in the request.",
    "attentions": [
      "The server should include information about the supported protocol versions in the response message if possible.",
      "The response should include a message body with information about the supported protocol versions."
    ]
  },
  {
    "code": 506,
    "meaning": "Variant Also Negotiates",
    "explanation": "The 506 Variant Also Negotiates status code indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
    "usage": "This status code should be used when the server has an internal configuration error.",
    "attentions": [
      "The server should include information about the configuration error in the response message if possible.",
      "The response should include a message body with information about the configuration error."
    ]
  },
  {
    "code": 507,
    "meaning": "Insufficient Storage",
    "explanation": "The 507 Insufficient Storage status code indicates that the server is unable to store the representation needed to complete the request.",
    "usage": "This status code should be used when the server is unable to store the representation needed to complete the request.",
    "attentions": [
      "The server should include information about the storage issue in the response message if possible.",
      "The response should include a message body with information about the storage issue."
    ]
  },
  {
    "code": 508,
    "meaning": "Loop Detected",
    "explanation": "The 508 Loop Detected status code indicates that the server detected an infinite loop while processing the request.",
    "usage": "This status code should be used when the server detected an infinite loop while processing the request.",
    "attentions": [
      "The server should include information about the loop in the response message if possible.",
      "The response should include a message body with information about the loop."
    ]
  },
  {
    "code": 510,
    "meaning": "Not Extended",
    "explanation": "The 510 Not Extended status code indicates that further extensions to the request are required for the server to fulfill it.",
    "usage": "This status code should be used when further extensions to the request are required for the server to fulfill it.",
    "attentions": [
      "The server should include information about the required extensions in the response message if possible.",
      "The response should include a message body with information about the required extensions."
    ]
  },
  {
    "code": 511,
    "meaning": "Network Authentication Required",
    "explanation": "The 511 Network Authentication Required status code indicates that the client needs to authenticate to gain network access.",
    "usage": "This status code should be used when the client needs to authenticate to gain network access.",
    "attentions": [
      "The server should include information about the required authentication in the response message if possible.",
      "The response should include a message body with information about the required authentication."
    ]
  }
]

// export const httpStatusCodesWithDetails = Object.entries(httpStatusCodes).map(([code, meaning]) => {
//   return {
//     code: code,
//     meaning: meaning,
//     explanation: `The ${code} ${meaning} status code indicates that the HTTP request was received and processed successfully by the server. It's the standard response for successful HTTP requests, and the actual response will depend on the request method used. In a GET request, the response will contain the requested data. In a POST request, the response might contain a message about the result of the operation.`,
//     usage: `This status code is used to convey that the server has successfully processed the request and the client can expect to receive the requested information or confirmation of the success of the request.`,
//     attentions: [
//       "While a 200 status code signifies a successful request, it's important to check the content of the response to ensure it contains the expected data or outcome.",
//       "In cases where a new resource has been created by a POST request, a 201 status code (Created) might be more appropriate to signify that the resource was successfully created.",
//       "Be aware of idempotency with certain request methods like PUT or DELETE; successful requests should yield the same status code upon repeated execution.",
//       "Use appropriate content negotiation if the server expects to return different formats of data, ensuring that the Content-Type header in the response is set correctly."
//     ]
//   }
// }