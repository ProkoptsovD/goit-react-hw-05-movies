"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[307],{6307:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i,r,a,c,u=n(885),o=n(2791),s=n(6871),f=n(5535),h=n(168),d=n(6444),g=d.ZP.ul(i||(i=(0,h.Z)([""]))),v=d.ZP.li(r||(r=(0,h.Z)([""]))),l=d.ZP.h3(a||(a=(0,h.Z)([""]))),p=d.ZP.p(c||(c=(0,h.Z)([""]))),_=n(184),m=function(){var e=(0,o.useState)((function(){return[]})),t=(0,u.Z)(e,2),n=t[0],i=t[1],r=(0,s.UO)().movieId;return(0,o.useEffect)((function(){f.H.getReviews(r).then((function(e){var t=e.data.results;i(t)}))}),[r]),(0,_.jsx)(_.Fragment,{children:n.length?(0,_.jsx)(g,{children:n.map((function(e){var t=e.author,n=e.content,i=e.id;return(0,_.jsxs)(v,{children:[(0,_.jsx)(l,{children:t}),(0,_.jsx)(p,{children:n})]},i)}))}):(0,_.jsx)("p",{children:"We don't have any review for this film"})})}},5535:function(e,t,n){n.d(t,{H:function(){return f}});var i=n(4569),r=n.n(i),a="trending/all/day",c="search/movie",u="movie/",o="/credits",s="/reviews";r().defaults.baseURL="https://api.themoviedb.org/3/";var f={getTrendingMovies:function(){return r().get(a+"?api_key=5ce599886a4c0703a030654068991e03")},searchMovie:function(e){return r().get(c+"?api_key=5ce599886a4c0703a030654068991e03&query="+e)},getMovieDetails:function(e){return r().get(u+e+"?api_key=5ce599886a4c0703a030654068991e03")},getCast:function(e){return r().get(u+e+o+"?api_key=5ce599886a4c0703a030654068991e03")},getReviews:function(e){return r().get(u+e+s+"?api_key=5ce599886a4c0703a030654068991e03")},POSTER_URL:"https://image.tmdb.org/t/p/original"}}}]);
//# sourceMappingURL=307.76fe3709.chunk.js.map