import React from 'react';
import { ArrowRight } from 'lucide-react';

const commentsData = [
  {
    id: 1,
    name: 'Student Name Gose Here',
    date: 'Oct 10,2021',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!',
    image: '/assets/course-player/photo/commentsender/user1-image.webp',
  },
  {
    id: 2,
    name: 'Student Name Gose Here',
    date: 'Oct 15,2021',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!',
    image: '/assets/course-player/photo/commentsender/user2-image.webp',
  },
  {
    id: 3,
    name: 'Student Name Gose Here',
    date: 'Oct 19,2021',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!',
    image: '/assets/course-player/photo/commentsender/user3-image.webp',
  },
];

export const Comments = () => {
  return (
    <section className="pt-10">
      <h2 className="text-4xl font-semibold mb-0">Comments</h2>
      <div className="divide-y divide-gray-100">
        {commentsData.map((comment) => (
          <div key={comment.id} className="py-9 flex flex-col sm:flex-row gap-6">
            <div 
              className="w-[85px] h-[85px] rounded-full bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${comment.image})` }}
            />
            <div className="text-gray-500">
              <h5 className="text-xl font-semibold text-gray-900">{comment.name}</h5>
              <h6 className="mt-3 text-sm font-medium">{comment.date}</h6>
              <p className="mt-4 text-[16px] leading-relaxed">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form className="mt-5 mb-5 space-y-6">
        <textarea
          className="w-full h-[180px] p-6 text-xl font-light bg-white border-none rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.09)] focus:ring-0 focus:shadow-[0_0_20px_rgba(0,0,0,0.09)] transition-shadow outline-none resize-none"
          placeholder="Write a comment"
        />
        <button
          type="submit"
          className="w-[200px] h-[60px] bg-[#41b69d] text-white font-semibold text-lg flex items-center justify-center gap-2 rounded-md hover:bg-[#38a089] transition-colors shadow-none"
        >
          Submit Review <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </section>
  );
};
