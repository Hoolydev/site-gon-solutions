import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artigo não encontrado</h1>
          <Link
            to="/blog"
            className="text-purple-400 hover:text-purple-300 font-semibold"
          >
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/50 via-gray-900 to-green-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Blog
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-transparent font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime} de leitura
            </div>
            <div>Por {post.author}</div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
          <div
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--tw-prose-body': '#d1d5db',
              '--tw-prose-headings': '#ffffff',
              '--tw-prose-lead': '#9ca3af',
              '--tw-prose-links': '#a855f7',
              '--tw-prose-bold': '#ffffff',
              '--tw-prose-counters': '#9ca3af',
              '--tw-prose-bullets': '#4b5563',
              '--tw-prose-hr': '#374151',
              '--tw-prose-quotes': '#d1d5db',
              '--tw-prose-quote-borders': '#374151',
              '--tw-prose-captions': '#9ca3af',
              '--tw-prose-code': '#ffffff',
              '--tw-prose-pre-code': '#d1d5db',
              '--tw-prose-pre-bg': '#1f2937',
              '--tw-prose-th-borders': '#374151',
              '--tw-prose-td-borders': '#374151',
            } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Navigation */}
      {(previousPost || nextPost) && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousPost && (
              <Link
                to={`/blog/${previousPost.slug}`}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex items-center text-purple-400 text-sm mb-2">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Artigo Anterior
                </div>
                <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors duration-300">
                  {previousPost.title}
                </h3>
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300 md:text-right"
              >
                <div className="flex items-center justify-end text-purple-400 text-sm mb-2">
                  Próximo Artigo
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
                <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors duration-300">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900/50 via-gray-900 to-green-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Gostou do conteúdo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco para implementar essas soluções na sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contato"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Fale Conosco
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Ver Mais Artigos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;