import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Comparison of Erlang and Lisp</h1>
      
      <p className="text-lg text-center mb-12">
        This page provides a comprehensive comparison between two powerful programming languages: Erlang and Lisp. 
        We'll explore their key features and compare them across various criteria.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Erlang Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed for concurrent and distributed systems</li>
              <li>Built-in support for fault tolerance</li>
              <li>Hot code swapping</li>
              <li>Functional programming paradigm</li>
              <li>Soft real-time systems support</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lisp Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>One of the oldest high-level programming languages</li>
              <li>Powerful macro system</li>
              <li>Dynamic typing</li>
              <li>Supports multiple paradigms (functional, procedural, object-oriented)</li>
              <li>Homoiconicity (code as data)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Comparison Table</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Criteria</TableHead>
                <TableHead>Erlang</TableHead>
                <TableHead>Lisp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Paradigm</TableCell>
                <TableCell>Functional, Concurrent</TableCell>
                <TableCell>Multi-paradigm (Functional, Procedural, Object-oriented)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Concurrency</TableCell>
                <TableCell>Built-in, lightweight processes</TableCell>
                <TableCell>Varies by implementation, not a core feature</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fault Tolerance</TableCell>
                <TableCell>Excellent, built-in supervision trees</TableCell>
                <TableCell>Depends on implementation, not a core feature</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Syntax</TableCell>
                <TableCell>Prolog-like</TableCell>
                <TableCell>S-expressions (parentheses-based)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Performance</TableCell>
                <TableCell>Good for concurrent and distributed systems</TableCell>
                <TableCell>Varies by implementation, can be highly optimized</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Use Cases</TableCell>
                <TableCell>Telecommunications, distributed systems, high-availability applications</TableCell>
                <TableCell>AI, machine learning, rapid prototyping, symbolic computing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;