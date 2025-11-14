<script
  dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const highlight = btn.querySelector('.highlight');
          if (!highlight) return;

          // Move the highlight, not the button
          highlight.style.transform = 'translate(' + (x - rect.width/2) * 0.12 + 'px, ' + (y - rect.height/2) * 0.12 + 'px)';
        });
      });

      // Reset highlight when cursor leaves button
      document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mouseleave', () => {
          const highlight = btn.querySelector('.highlight');
          if (highlight) highlight.style.transform = 'translate(0, 0)';
        });
      });
    `,
  }}
/>
