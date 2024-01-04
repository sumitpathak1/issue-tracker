import {
  Table,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRow,
} from "@radix-ui/themes";

import Link from "../../components/Link";

import prisma from "@/prisma/client";
import IssueStatusBadge from "../../components/IssueStatusBadge";
import IssueActions from "./IssueActions";


const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <IssueActions />

      <Table.Root variant="surface">
        <TableHeader>
          <Table.Row>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Status
            </TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Created
            </TableColumnHeaderCell>
          </Table.Row>
        </TableHeader>
        <TableBody>
          {issues.map((issues) => (
            <TableRow key={issues.id}>
              <TableCell>
                <Link href={`/issues/${issues.id}`}>
                {issues.title}
                </Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issues.status}></IssueStatusBadge>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <IssueStatusBadge status={issues.status}></IssueStatusBadge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {issues.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  );
};

export const dynamic = 'force-dynamic';


export default IssuesPage;
