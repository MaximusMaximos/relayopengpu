<script
  dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          // Target only the INNER content
          const inner = btn.querySelector('.inner');
          if (!inner) return;

          // Apply subtle magnetic effect
          inner.style.transform = 'translate(' + x * 0.12 + 'px, ' + y * 0.12 + 'px)';
        });
      });

      // Reset on mouse leave
      document.addEventListener('mouseout', () => {
        document.querySelectorAll('.magnetic-btn .inner').forEach(inner => {
          inner.style.transform = 'translate(0px, 0px)';
        });
      });
    `,
  }}
/>
