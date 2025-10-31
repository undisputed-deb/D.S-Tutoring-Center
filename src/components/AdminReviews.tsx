// src/components/AdminReviews.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase, type Review } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Star, Loader2 } from "lucide-react";

export const AdminReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPendingReviews();
  }, []);

  const fetchPendingReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setReviews(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ status: 'approved' })
        .eq('id', id);

      if (error) throw error;
      setReviews(reviews.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error approving:', error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ status: 'rejected' })
        .eq('id', id);

      if (error) throw error;
      setReviews(reviews.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error rejecting:', error);
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Pending Reviews ({reviews.length})</h2>
      
      {reviews.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No pending reviews</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <div className="flex gap-1">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{review.email}</p>
                  <p className="text-gray-800 mb-4">"{review.comment}"</p>
                  <p className="text-xs text-gray-500">
                    {new Date(review.created_at!).toLocaleString()}
                  </p>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button
                    onClick={() => handleApprove(review.id!)}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleReject(review.id!)}
                    variant="destructive"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};