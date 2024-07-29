import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Comparison of Erlang and Lisp</h1>
      
      <p className="mb-8 text-lg text-center">
        This page provides a comparison between two influential programming languages: Erlang and Lisp. 
        We'll explore their key features and compare them across various aspects.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Erlang</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed for building scalable, fault-tolerant systems</li>
              <li>Built-in support for concurrency and distributed computing</li>
              <li>Hot code swapping for updates without downtime</li>
              <li>Functional programming paradigm</li>
              <li>Excellent for telecommunications and real-time systems</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Lisp</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>One of the oldest high-level programming languages</li>
              <li>Powerful macro system for metaprogramming</li>
              <li>Homoiconicity (code as data)</li>
              <li>Dynamic typing and garbage collection</li>
              <li>Ideal for artificial intelligence and symbolic computation</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Comparison Table</h2>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Criteria</TableHead>
              <TableHead>Erlang</TableHead>
              <TableHead>Lisp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Paradigm</TableCell>
              <TableCell>Functional, Concurrent</TableCell>
              <TableCell>Multi-paradigm (Functional, Procedural, Object-Oriented)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Concurrency</TableCell>
              <TableCell>Built-in, lightweight processes</TableCell>
              <TableCell>Varies by implementation, not a core feature</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Fault Tolerance</TableCell>
              <TableCell>Excellent, built-in supervision trees</TableCell>
              <TableCell>Depends on implementation, not a core focus</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Syntax</TableCell>
              <TableCell>Prolog-inspired, pattern matching</TableCell>
              <TableCell>S-expressions, parentheses-heavy</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Performance</TableCell>
              <TableCell>Optimized for concurrent, distributed systems</TableCell>
              <TableCell>Can be very fast, but varies by implementation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Use Cases</TableCell>
              <TableCell>Telecommunications, distributed systems, real-time applications</TableCell>
              <TableCell>AI, symbolic computation, rapid prototyping, extensible systems</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

export default Index