

const Blogs = () => {
    return (
        <div>
            <h1 className="text-center text-5xl font-bold py-5">Blogs</h1>
            <div className="w-4/5 mx-auto bg-slate-300 rounded-lg shadow-lg mt-4">
                <h1 className="text-3xl font-semibold p-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="p-4">An access token is a short-lived credential used to access protected resources or perform actions on a server. It is issued by an authentication server after successful authentication and has an expiration time. On the other hand, a refresh token is a long-lived credential used to obtain a new access token when the current one expires. Refresh tokens are securely stored on the client-side and are not sent with each request. Access tokens are typically stored in memory during the clients session, while refresh tokens can be stored securely using mechanisms like HTTP-only cookies or encrypted local storage. Proper token storage and security practices are crucial to prevent unauthorized access and ensure a seamless user experience.</p>
            </div>
            <div className="w-4/5 mx-auto bg-slate-300 rounded-lg shadow-lg mt-4">
                <h1 className="text-3xl font-semibold p-4">Compare SQL and NoSQL databases?</h1>
                <p className="p-4">SQL and NoSQL databases are two distinct types of database systems with key differences. SQL databases are based on a relational model, using structured schemas and enforcing strong data consistency. They excel in complex queries, transactions, and relationships. NoSQL databases, on the other hand, provide a more flexible and schema-less approach. They offer various data models like key-value, document, columnar, and graph databases. NoSQL databases prioritize scalability, performance, and handling unstructured or semi-structured data. They sacrifice some data consistency for increased scalability. Choosing between SQL and NoSQL depends on the specific requirements of the application, with SQL being suitable for structured data and NoSQL for unstructured or scalable scenarios.</p>
            </div>
            <div className="w-4/5 mx-auto bg-slate-300 rounded-lg shadow-lg mt-4">
                <h1 className="text-3xl font-semibold p-4">What is express js? What is Nest JS?</h1>
                <p className="p-4">Express.js is a lightweight web application framework for Node.js, offering a minimalist approach to building web servers and APIs. It simplifies handling HTTP requests, routing, and middleware integration. In contrast, NestJS is an opinionated framework built on top of Express.js, providing a structured and modular approach inspired by Angular. It utilizes TypeScript and offers features like dependency injection, decorators-based routing, and built-in support for modules, controllers, and services. NestJS aims to bring organization and scalability to Node.js applications. Express.js is known for its simplicity and flexibility, while NestJS provides a more opinionated and structured framework for building server-side applications with Node.js.</p>
            </div>
            <div className="w-4/5 mx-auto bg-slate-300 rounded-lg shadow-lg mt-4">
                <h1 className="text-3xl font-semibold p-4">What is MongoDB aggregate and how does it work?</h1>
                <p className="p-4">In MongoDB, the aggregate framework is a powerful tool used for performing data aggregation operations on collections. It allows for complex queries and data transformations, combining multiple stages of operations to process and analyze data. The aggregate pipeline consists of various stages such as $match, $group, $sort, $project, and more. Each stage manipulates and processes the documents in the pipeline sequentially. Documents flow through the pipeline, and each stage filters, transforms, or groups the data based on the specified operations. By utilizing the aggregate framework, MongoDB provides a flexible and efficient way to perform advanced data aggregation tasks on large datasets.</p>
            </div>
        </div>
    );
};

export default Blogs;