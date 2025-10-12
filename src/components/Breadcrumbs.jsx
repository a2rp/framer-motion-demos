import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Breadcrumbs({
    homePath = "/home",
    sectionLabel,
    sectionPath,
    topics = [],
    slugParam = "topic_name",
}) {
    const params = useParams();
    const slug = params?.[slugParam];

    const title =
        topics.find(t => t.slug === slug)?.title ||
        (slug ? decodeURIComponent(slug).replace(/-/g, " ") : "");

    return (
        <Crumbs aria-label="breadcrumb">
            <ol>
                <li><NavLink to={homePath}>Home</NavLink></li>
                <li><NavLink to={sectionPath}>{sectionLabel}</NavLink></li>
                {slug && <li aria-current="page"><span>{title}</span></li>}
            </ol>
        </Crumbs>
    );
}

/* --- styles (compact, matches your theme) --- */
const Crumbs = styled.nav`
  margin: 0 0 12px;
  font-size: .95rem;
  color: #aaa;

  ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-flex;
    align-items: center;
  }
  li + li::before {
    content: "›";
    margin: 0 6px;
    color: #666;
  }
  a {
    color: #aaa;
    text-decoration: none;
  }
  a:hover { color: orangered; text-decoration: underline; }
  [aria-current="page"] span { color: #ddd; }
`;
