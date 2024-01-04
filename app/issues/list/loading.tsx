import {
  Table,
  TableHeader,
  TableColumnHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "../../components/IssueStatusBadge";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "./IssueActions";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];
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
            <TableRow key={issues}>
              <TableCell>
                <Skeleton></Skeleton>
                <div className="block md:hidden">
                  <Skeleton />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  );
};

export default LoadingIssuesPage;
