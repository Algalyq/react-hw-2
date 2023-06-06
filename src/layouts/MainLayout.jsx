function MainLayout(props) {
  return (
    
    <div className={props.isDarkMode ? "grid w-screen h-screen bg-white from-slate-950 via-red-600 to-stone-700 text-white text-lg" : " grid w-screen h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950 via-red-600 to-stone-700 text-white text-lg"}>
      {props.children}
    </div>
  );
}

export default MainLayout;
