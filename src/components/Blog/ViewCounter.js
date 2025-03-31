"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setviews] = useState(0);
  // console.log(slug)
  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error) console.error(error);
      } catch (error) {
        console.error(error);
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getCountView = async () => {
      try {
        let { data: views, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) console.error(error);

        setviews(views?.count || 0);
      } catch (error) {
        console.error(error);
      }
    };
    getCountView();
  }, [slug]);
  
  if (showCount) {
    return <div>{views} views</div>;
  }
  return null;
};

export default ViewCounter;
